const app = new Vue({
    el: '#app',
    data: {
        clockPickerOptions: {
            placement: 'top',
            align: 'left',
            autoclose: true
        },
        from: null,
        to: null
    },
    methods: {
        parseTime(s) {
            var part = s.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
            var hh = parseInt(part[1], 10);
            var mm = parseInt(part[2], 10);
            var ap = part[3] ? part[3].toUpperCase() : null;
            if (ap === "AM") {
                if (hh == 12) {
                    hh = 0;
                }
            }
            if (ap === "PM") {
                if (hh != 12) {
                    hh += 12;
                }
            }
            return { hh: hh, mm: mm };
        }
    },
    computed: {
        timeDifference: function () {
            var from = this.parseTime(this.from || '00:00');
            var to = this.parseTime(this.to || '00:00');
            var timeDifference = (new Date(1996, 10, 3, to.hh, to.mm) - new Date(1996, 10, 3, from.hh, from.mm))/60000;
            return (timeDifference > 0)? timeDifference : 0;
        },
    }
});