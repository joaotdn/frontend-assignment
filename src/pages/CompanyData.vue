<template>
  <div>
    <b-row>
      <b-col cols="12">
        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet consectetur doloribus ducimus earum eveniet explicabo fugiat laboriosam libero.</p>
      </b-col>

      <b-col cols="12">
        <b-form class="mt-3">
          <b-form-group
            id="input-group-1"
            label="Company name"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              class="w-75"
              v-model="form.name"
              type="text"
              required
              placeholder="e.g. Your Company Name"
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Company spend"
            label-for="input-spend"
          >
            <b-form-input
              id="input-spend"
              class="w-75"
              v-model="form.spend"
              type="text"
              required
              placeholder="e.g. $150,000"
            />
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Company spend ability"
            label-for="input-spend-ability"
          >
            <b-form-input
              id="input-spend-ability"
              class="w-75"
              v-model="form.spendAbility"
              type="text"
              required
              placeholder="e.g. $150,000 - $330,000"
            />
          </b-form-group>

          <b-form-group
            id="input-group-"
            label="Notes"
            label-for="input-notes"
          >
            <b-form-textarea
              id="input-notes"
              v-model="form.notes"
              required
              placeholder="e.g. Good Tech Company"
              rows="6"
              max-rows="6"
            />
          </b-form-group>

          <b-row class="text-right">
            <b-col>
              <b-button variant="outline-primary" type="reset" class="text-uppercase">Reset</b-button>
              <b-button variant="primary" type="submit" class="text-uppercase">Submit</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        spend: null,
        spendAbility: null,
        notes: ''
      }
    };
  }
};
</script>
