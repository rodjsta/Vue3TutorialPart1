import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";

export default {
    template: `
        <div class="grid gap-6">
            <assignments></assignments>
        </div>
    `,

    components: {
        'app-button': AppButton,
        Assignments,
    },
};
