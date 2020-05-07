'use strict';

$.defineHTMLElement('wu-mech-display', class WUMechDisplay extends HTMLElement
{
    constructor (mech, scale)
    {
        super();

        this.scale = scale || $.getLS('main_mech_scale') || $.setLS('main_mech_scale', 60);
        this.setup = [];
        this.parts = [];
        this.partNames = ['torso', 'leg1', 'leg2', 'side1', 'side2', 'side3', 'side4', 'top1', 'top2', 'drone'];
        this.mechPartsContainer = document.createElement('mech-parts');
        this.wrapper = document.createElement('parts-container-wrapper');

        const zIndexMap = [4, 5, 3, 7, 0, 8, 1, 6, 2, 9];
        const inputScale = $.dom('input', {
            type: 'range',
            min: 1,
            max: 100,
            value: this.scale,
            oninput: e => this.scaleTo(e.target.value),
        });

        
        for (let i = this.partNames.length; i--;)
        {
            this.parts[i] = new WUMechPart();
            this.parts[i].name = this.partNames[i];
            this.parts[i].style.zIndex = zIndexMap[i];

            this.mechPartsContainer.appendChild(this.parts[i]);
        }


        this.wrapper.appendChild(this.mechPartsContainer);

        this.appendChild(this.wrapper);
        this.appendChild(inputScale);

        
        window.addEventListener('resize', () => this.adjust());


        if (mech) this.assemble(mech.setup);
    }

    assemble (setup)
    {
        if (!setup || !setup[0])
        {
            for (const p of this.parts) p.style.display = 'none';
            return;
        }

        setup = [
            setup[0], setup[1], setup[1], setup[2], setup[3],
            setup[4], setup[5], setup[6], setup[7], setup[8],
        ];

        for (let i = this.parts.length; i--;)
        {
            if (setup[i] !== this.parts[i].item) this.parts[i].style.display = 'none';
            this.parts[i].setItem(setup[i]);
        }

        const onImagesReady = setInterval(() =>
        {
            if (!$.Array.every(this.parts, part => part.ready)) return;

            this.adjust()
            clearInterval(onImagesReady);
        }, 25);
    }

    adjust ()
    {
        if (!this.parts[0].item) return;

        const skipAttachment = ['leg1', 'torso', 'drone'];
        const leg1 = this.parts[1];
        const torso = this.parts[0];
        const drone = this.parts[9];
        
        torso.style.display = '';
        
        if (!leg1.item)
        {
            torso.x = (-torso.w) / 2;
            torso.y = -torso.h;
        }
        else
        {
            leg1.style.display = '';
            leg1.x = (-leg1.w - (torso.item.attachment.leg2.x - torso.item.attachment.leg1.x)) / 2;
            leg1.y = -leg1.h;

            torso.x = leg1.x + (leg1.item.attachment.x - torso.item.attachment.leg1.x);
            torso.y = leg1.y + (leg1.item.attachment.y - torso.item.attachment.leg1.y);
        }

        if (drone.item)
        {
            drone.style.display = '';
            drone.x = torso.x - drone.w;
            drone.y = torso.y - drone.h - 50;
        }

        for (let i = this.parts.length; i--;)
        {
            const part = this.parts[i];

            if (!part.item || skipAttachment.includes(part.name)) continue;

            part.style.display = '';
            part.x = torso.x + (torso.item.attachment[part.name].x - part.item.attachment.x);
            part.y = torso.y + (torso.item.attachment[part.name].y - part.item.attachment.y);
        }

        this.scaleTo();
    }

    scaleTo (procent)
    {
        if (procent) this.scale = procent;

        this.mechPartsContainer.style.transform = 'scale(' + this.scale / 100 + ')';
        //this.mechPartsContainer.style.bottom = -(50 - this.scale / 2) + '%';
    }
});
