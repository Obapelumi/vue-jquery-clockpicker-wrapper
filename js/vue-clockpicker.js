Vue.component('clock-picker',{
    template: '#vue-clockpicker',
    props: ['options', 'value'],
    mounted: function () {
        var vm = this;

        $(this.$el).clockpicker(this.options)
        .val(this.value)
        .trigger('change')
        .on('change', function () {
            console.log('works until now')
            vm.$emit('input', this.value);
        });
    },
    watch: {
        value: function (value) {
            $(this.$el)
            .val(value)
            .trigger('change');
        }
    }
})