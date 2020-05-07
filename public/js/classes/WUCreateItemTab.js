$.defineHTMLElement('wu-create-item-tab', class WUCreateItemTab extends HTMLElement
{
    constructor ()
    {
        super();

        this.className = 'tab';

        this.steps = [this._createStep0(), this._createStep1(), this._createStep2()];
        
        for (let i = 0; i < this.steps.length; i++) this.appendChild(this.steps[i]);

        this.addEventListener('click', e => (e.target === this) && this.hide());
        this.hide();
    }

    hide ()
    {
        this.style.visibility = 'hidden';
    }

    show (step = 0, item)
    {
        this.style.visibility = '';
        this.steps[step].show(item);

        for (let i = 0; i < this.steps.length; i++) if (i !== step) this.steps[i].hide();
    }

    _createStep0 ()
    {
        const cw = $.dom('step-0-content-wrapper', {
            className: 'box border',
            currentItem: null,
            hide: function () { this.style.display = 'none' },
            show: function (item = { custom:true, tiers:[4, 5], stats:{} })
            {
                this.style.display = 'block';
                this.currentItem = item;
            },
            reset: function ()
            {
                inputName.value    = '';
                inputURL.value     = '';
                inputType.value    = '1';
                inputElement.value = '1';
            },
        });
        const btnCloseTab  = $.dom('close-tab-btn', { onclick:() => this.hide() });
        const content      = document.createElement('full-content');
        const inputName    = $.dom('input', { type:'text', spellcheck:false, placeholder:'name' });
        const inputURL     = $.dom('input', { type:'text', spellcheck:false, placeholder:'image link' });
        const typeCont     = document.createElement('type-n-element-container');
        const inputType    = $.dom('select', { oninput:e => cw.currentItem.type = Number(e.target.value) });
        const inputElement = $.dom('select', { oninput:e => cw.currentItem.element = Number(e.target.value) });
        const btnContinue  = new WUButton('Continue', './img/icons/stats/advance.svg', () =>
        {
            const item = cw.currentItem;

            item.name    = inputName.value || 'Foo' + (new Date()).getTime();
            item.url     = inputURL.value;
            item.type    = Number(inputType.value);
            item.element = Number(inputElement.value);

            $.toDataURL(item.url, data =>
            {
                $.testImg(data, img =>
                {
                    if (img)
                    {
                        item.src    = data;
                        item.width  = img.naturalWidth;
                        item.height = img.naturalHeight;
                    }
                    else
                    {
                        item.src    = this.notexture;
                        item.width  = 100;
                        item.height = 100;
                    }

                    this.show(1, cw.currentItem);
                });
            });
        });

        const elemOptions = ['Physical', 'Explosive', 'Electric'];
        const typeOptions = ['Torso', 'Leg', 'Side Weapon', 'Top Weapon', 'Drone', 'Charge Engine', 'Teleporter', 'Hook', 'Module'];

        for (let i = 0; i < typeOptions.length; i++)
        {
            const option = $.dom('option', { value:i+1, innerText:typeOptions[i] });
            inputType.appendChild(option);
        }
        for (let i = 0; i < elemOptions.length; i++) inputElement.appendChild($.dom('option', { value:i+1, innerText:elemOptions[i] }));

        cw.appendChild(btnCloseTab);

        content.appendChild(inputName);
        content.appendChild(inputURL);

        typeCont.appendChild(inputType);
        typeCont.appendChild(inputElement);

        content.appendChild(typeCont);
        content.appendChild(btnContinue);

        cw.appendChild(content);


        return cw;
    }

    _createStep1 ()
    {
        const cw = $.dom('step-1-content-wrapper', {
            className: 'box border',
            currentItem: null,
            hide: function ()
            {
                this.style.display = 'none';
            },
            show: function (item)
            {
                this.style.display = 'block';
                this.currentItem = item;
            },
            reset: function ()
            {
                for (let i = statInputsArray.length; i--;) statInputsArray[i].clear();
            },
        });
        const content = document.createElement('full-content');
        const statInputsArray = [];
        const statInputsCont = document.createElement('stat-inputs');
        const btnsCont = document.createElement('buttons-container');
        const btnGoBack = new WUButton('Go Back', './img/icons/stats/retreat.svg', () => this.show(0, cw.currentItem));
        const btnContinue = new WUButton('Continue', './img/icons/stats/advance.svg', () =>
        {
            const item = cw.currentItem;

            for (let i = 0; i < statInputsArray.length; i++)
            {
                const statInput = statInputsArray[i];
                const value = statInput.getValue();

                if ((Array.isArray(value) && (value[0] || value[1])) || (!Array.isArray(value) && value)) item.stats[statInput.stat.name] = statInput.getValue();
            }

            if (item.type > 5)
            {
                window.workshop.defineCustomItem(item, () =>
                {
                    this.hide();
                    document.querySelector('wu-custom-items-tab').show();
                });
            }
            else this.show(2, item);
        });

        const statsData = window.workshop.statsData;
        const statNames = Object.keys(statsData);

        for (let i = 0; i < statNames.length; i++)
        {
            const stat = statsData[statNames[i]];
            const icon = $.dom('img', { src:stat.src });
            const statInput = $.dom('stat-input', {
                inputs: [],
                stat,
                oninput: function (e)
                {
                    if (this.inputs.length === 1)
                    {
                        const value = stat.type === 'num' ? Number(e.target.value) : e.target.checked;
                        if (value) cw.currentItem.stats[stat.name] = value;
                        else delete cw.currentItem.stats[stat.name];
                    }
                    else
                    {
                        const values = [Number(this.inputs[0].value), Number(this.inputs[1].value)];
                        if (values[0] || values[1]) cw.currentItem.stats[stat.name] = values;
                        else delete cw.currentItem.stats[stat.name];
                    }
                }
            });


            statInput.getValue = function ()
            {
                return this.stat.type === 'boo' ? Boolean(this.inputs[0].checked) : this.inputs.length > 1 ? [Number(this.inputs[0].value), Number(this.inputs[1].value)] : Number(this.inputs[0].value);
            };
            statInput.clear = function ()
            {
                if (this.inputs.length > 1)
                {
                    this.inputs[0].value = 0;
                    this.inputs[1].value = 0;
                }
                else if (this.stat.type = 'boo') this.inputs[0].checked = false;
                else this.inputs[0].value = 0;
            };


            statInput.appendChild(icon);

            if (stat.type === 'num')
            {
                const inputData = {
                    type: 'number',
                    placeholder: '0',
                };
                const input1 = $.dom('input', inputData);

                statInput.inputs.push(input1);
                statInput.appendChild(input1);

                if (stat.inputs > 1)
                {
                    const input2 = $.dom('input', inputData);

                    statInput.inputs.push(input2);
                    statInput.append('-');
                    statInput.appendChild(input2);
                }
            }
            else
            {
                const input = new WUSwitchButton();
                input.oninput = () => statInput.dispatchEvent(new Event('input'));

                statInput.inputs.push(input);
                statInput.appendChild(input);
            }

            statInput.append(stat.context);

            statInputsArray.push(statInput);
            statInputsCont.appendChild(statInput);
        }


        content.appendChild(statInputsCont);

        btnsCont.appendChild(btnGoBack);
        btnsCont.appendChild(btnContinue);

        content.appendChild(btnsCont);

        cw.appendChild(content);


        return cw;
    }

    _createStep2 ()
    {
        let setup;
        let initialItemSize;

        const newInput = () => $.dom('input', {
            type: 'range',
            max: 150,
            min: -150,
            value: 0,
            hide: function () { this.style.display = 'none' },
            show: function ()
            {
                this.value = 0;
                this.style.display = 'block';
            },
            oninput: () => setItUp(),
        });

        const setItUp = () =>
        {
            const item = cw.currentItem;

            item.width  = initialItemSize.width  * (Number(inputSize.value) / 100);
            item.height = initialItemSize.height * (Number(inputSize.value) / 100);

            if (item.type === 1)
            {
                const
                    leg1X  = item.width  / 3    - Number(inputLegsHGap.value) + Number(inputLegsX.value),
                    leg2X  = item.width  / 1.5  + Number(inputLegsHGap.value) + Number(inputLegsX.value),
                    legsY  = item.height * 0.9  - Number(inputLegsY.value),
                    side1X = item.width  / 3    - Number(inputSideHGap.value) + Number(inputSideX.value),
                    side2X = item.width  / 1.5  + Number(inputSideHGap.value) + Number(inputSideX.value),
                    side1Y = item.height * 0.45 - Number(inputSideVGap.value) + Number(inputSideY.value),
                    side3Y = item.height * 0.7  + Number(inputSideVGap.value) + Number(inputSideY.value),
                    top1X  = item.width  / 3    - Number(inputTopGap.value)   + Number(inputTopX.value),
                    top2X  = item.width  / 1.5  + Number(inputTopGap.value)   + Number(inputTopX.value),
                    topY   = item.height / 5    - Number(inputTopY.value);

                item.attachment = {
                    leg1:  { x:leg1X,  y:legsY },
                    leg2:  { x:leg2X,  y:legsY },
                    side1: { x:side1X, y:side1Y },
                    side2: { x:side2X, y:side1Y },
                    side3: { x:side1X, y:side3Y },
                    side4: { x:side2X, y:side3Y },
                    top1:  { x:top1X,  y:topY },
                    top2:  { x:top2X,  y:topY },
                };
            }
            else if (item.type === 2)
            {
                item.attachment = {
                    x: item.width  / 2  + Number(inputX.value),
                    y: item.height / 10 + Number(inputY.value),
                };
            }
            else if (item.type === 3 || item.type === 4)
            {
                item.attachment = {
                    x: item.width  / 6 + Number(inputX.value),
                    y: item.height / 2 + Number(inputY.value),
                };
            }

            previewMech.assemble(setup);
        };

        const cw = $.dom('step-2-content-wrapper', {
            className: 'box border',
            currentItem: null,
            hide: function ()
            {
                this.style.display = 'none';

                for (let i = attachmentInputsCont.inputs.length; i--;) attachmentInputsCont.inputs[i].hide();
            },
            show: function (item)
            {
                initialItemSize = {
                    width:  item.width,
                    height: item.height,
                };

                this.style.display = 'block';
                this.currentItem = item;
                

                attachmentInputsCont.inputs[0].show(item);

                let
                    troso = workshop.itemQuery.interceptor,
                    legs  = workshop.itemQuery.ironboots,
                    side  = workshop.itemQuery.mercy,
                    top   = workshop.itemQuery.mightycannon;

                if (item.element === 2)
                {
                    troso = workshop.itemQuery.nightmare,
                    legs  = workshop.itemQuery.scorchingfeet,
                    side  = workshop.itemQuery.reckoning,
                    top   = workshop.itemQuery.desertsnake;
                }
                else if (item.element === 3)
                {
                    troso = workshop.itemQuery.sith,
                    legs  = workshop.itemQuery.chargedwalkers,
                    side  = workshop.itemQuery.bulldog,
                    top   = workshop.itemQuery.spinefall;
                }

                if (item.type === 1)
                {
                    setup = [item, legs, side, side, side, side, top, top];

                    for (let i = 3; i < 13; i++) attachmentInputsCont.inputs[i].show(item);
                }
                else if (item.type === 2 || item.type === 3 || item.type === 4)
                {
                    if (item.type === 2) setup = [troso, item, null, null, side, side];
                    if (item.type === 3) setup = [troso, legs, item, item, side, side];
                    if (item.type === 4) setup = [troso, legs, null, null, side, side, item, item];

                    attachmentInputsCont.inputs[1].show(item);
                    attachmentInputsCont.inputs[2].show(item);
                }
                else setup = [troso, legs, null, null, side, side, null, null, item];

                setItUp();
            },
            reset: function ()
            {
                previewMech.assemble();
            },
        });

        const content = document.createElement('full-content');
        const attachmentInputsCont = document.createElement('attachment-inputs-container');
        const previewMech = new WUMechDisplay();
        const btnsCont = document.createElement('buttons-container');
        const btnGoBack = new WUButton('Go Back', './img/icons/stats/retreat.svg', () => this.show(1, cw.currentItem));
        const btnContinue = new WUButton('Continue', './img/icons/stats/advance.svg', () =>
        {
            this.hide();
            window.workshop.defineCustomItem(cw.currentItem);
            window.workshop.customItemsTab.show();
            this.reset();
        });

        const
            inputSize     = newInput(),
            inputX        = newInput(),
            inputY        = newInput(),
            inputLegsHGap = newInput(),
            inputLegsX    = newInput(),
            inputLegsY    = newInput(),
            inputSideHGap = newInput(),
            inputSideX    = newInput(),
            inputSideVGap = newInput(),
            inputSideY    = newInput(),
            inputTopGap   = newInput(),
            inputTopX     = newInput(),
            inputTopY     = newInput();
        
        inputSize.show = function ()
        {
            this.min = 1;
            this.max = 199;
            this.value = 100;
            this.style.display = 'block';
        };

        inputSize.show();
        
        attachmentInputsCont.inputs = [
            inputSize,
            inputX,
            inputY,
            inputLegsHGap,
            inputLegsX,
            inputLegsY,
            inputSideHGap,
            inputSideX,
            inputSideVGap,
            inputSideY,
            inputTopGap,
            inputTopX,
            inputTopY,
        ];

        for (let i = 0; i < attachmentInputsCont.inputs.length; i++)
        {
            const input = attachmentInputsCont.inputs[i];
            
            input.hide();
            
            attachmentInputsCont.appendChild(input);
        }


        content.appendChild(attachmentInputsCont);
        content.appendChild(previewMech);

        btnsCont.appendChild(btnGoBack);
        btnsCont.appendChild(btnContinue);

        content.appendChild(btnsCont);

        cw.appendChild(content);

        return cw;
    }

    reset ()
    {
        for (let i = this.steps.length; i--;) this.steps[i].reset();
    }
});
