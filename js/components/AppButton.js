export default {
    template: `
        <button
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-700': type == 'primary',
                'bg-purple-200 hover:bg-purple-400': type == 'secondary',
                'bg-gray-200 hover:bg-gray-400': type == 'muted',
                'is-loading': processing,
            }"
            :disabled="processing"
        >
            <slot />
        </button>
    `,
    mounted() {
        // alert('hello');
    },

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            // processing: true
        };
    }
}