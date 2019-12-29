<template>
    <b-row>
        <b-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3" class="text-left">
            <b-form @submit.stop="onSubmit">
                <b-form-group
                        id="input-group-1"
                        label="Batch Name:"
                        label-for="input-1"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.batchName"
                            required
                            placeholder="Pinks and Greens"
                    />
                </b-form-group>
            </b-form>
        </b-col>
        <b-navbar type="light" variant="light" fixed="bottom">
            <b-col cols="12" offset-sm="9" sm="3">
                <b-button type="submit" variant="success" class="float-right">Start Brew ></b-button>
            </b-col>
        </b-navbar>
    </b-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          batchName: '',
          dateRange: {}
        }
      }
    },
    methods: {
      onSubmit(evt) {
        console.log('this.form', this.form.batchName);
        evt.preventDefault();
      }
    }
  }
</script>