<template>
  <div>
    <b-row>
      <b-col cols="12">
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet consectetur doloribus ducimus earum eveniet explicabo fugiat laboriosam libero.
        </p>
      </b-col>

      <b-col cols="12">
        <b-form
          class="mt-3"
          @submit.prevent="submitForm"
        >
          <b-form-group
            id="input-group-1"
            label="Company name"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              v-model="form.name"
              v-validate="'required'"
              class="w-75"
              type="text"
              placeholder="e.g. Your Company Name"
              name="name"
            />
            <span
              v-show="errors.has('name')"
              class="text-danger text-uppercase"
            ><small>{{ errors.first('name') }}</small></span>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Company spend"
            label-for="input-spend"
          >
            <b-form-input
              id="input-spend"
              v-model="form.spend"
              v-currency="{
                currency: 'USD',
                locale: 'en',
                distractionFree: false
              }"
              v-validate="'required'"
              class="w-75"
              type="text"
              placeholder="e.g. $150,000"
              name="spend"
            />
            <span
              v-show="errors.has('spend')"
              class="text-danger text-uppercase"
            ><small>{{ errors.first('spend') }}</small></span>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Company spend ability"
            label-for="input-spend-ability"
          >
            <b-input-group class="w-75">
              <b-form-input
                id="input-spend-ability-min"
                v-model="form.spendAbilityMin"
                v-currency="{
                  currency: 'USD',
                  locale: 'en',
                  distractionFree: false
                }"
                v-validate="'required'"
                type="text"
                placeholder="Minimum spend (e.g. $150,000)"
                name="spendAbilityMin"
              />

              <b-form-input
                id="input-spend-ability-max"
                v-model="form.spendAbilityMax"
                v-currency="{
                  currency: 'USD',
                  locale: 'en',
                  distractionFree: false
                }"
                type="text"
                placeholder="Maximum spend (e.g. $330,000)"
                name="spendAbilityMax"
              />
              <span
                v-show="errors.has('spendAbilityMin')"
                class="text-danger text-uppercase"
                style="display: block;"
              ><small>{{ errors.first('spendAbilityMin') }}</small></span>
            </b-input-group>
          </b-form-group>

          <b-form-group
            id="input-group-"
            label="Notes"
            label-for="input-notes"
          >
            <b-form-textarea
              id="input-notes"
              v-model="form.notes"
              placeholder="e.g. Good Tech Company"
              rows="6"
              max-rows="6"
              @click="modalShow = !modalShow"
            />
          </b-form-group>

          <b-row class="text-right">
            <b-col>
              <b-button
                variant="outline-primary"
                type="reset"
                class="text-uppercase"
              >
                Reset
              </b-button>
              <b-button
                variant="primary"
                type="submit"
                class="text-uppercase"
              >
                Submit
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-modal v-model="modalShow">
          <b-form-textarea
            v-model="form.notes"
            placeholder="Write here your additional notes"
            rows="6"
            max-rows="6"
          />
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { CurrencyDirective } from 'vue-currency-input';

export default {
  directives: {
    currency: CurrencyDirective
  },

  data () {
    return {
      form: {
        name: '',
        spend: null,
        spendAbilityMin: null,
        spendAbilityMax: null,
        notes: ''
      },
      modalShow: false
    };
  },

  methods: {
    // TODO Use Vuex
    submitForm () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
};
</script>
