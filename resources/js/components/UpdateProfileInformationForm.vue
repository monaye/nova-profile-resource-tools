<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">
            {{ this.title }}
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            {{
              __("Update your account's profile information and email address.")
            }}
          </p>
        </div>
        <div class="px-4 sm:px-0"></div>
      </div>
      <loading-card :loading="loading" class="md:col-span-2">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="onSubmitForm">
            <div
              class="
                px-4
                py-5
                bg-white
                sm:p-6
                shadow
                sm:rounded-tl-md sm:rounded-tr-md
              "
            >
              <div class="grid grid-cols-6 gap-6">
                <!-- Profile Photo --><!--v-if--><!-- Name -->
                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    for="name"
                    ><span>{{ __("Name") }}</span></label
                  ><input
                    class="
                      mt-1
                      border-gray-300
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      leading-tight
                      focus:outline-none
                    "
                    id="name"
                    type="text"
                    v-model="name"
                    v-on:keyup="resetNameErrorMessage"
                  />
                  <div class="mt-2" v-if="hasError('name')">
                    <p class="text-sm text-red-600">
                      {{ errors.name[0] }}
                    </p>
                  </div>
                </div>
                <!-- Email -->
                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    for="email"
                    ><span>{{ __("Email") }}</span></label
                  ><input
                    class="
                      mt-1
                      border-gray-300
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      leading-tight
                      focus:outline-none
                    "
                    id="email"
                    type="email"
                    v-model="email"
                    v-on:keyup="resetEmailErrorMessage"
                  />
                  <div class="mt-2" v-if="hasError('email')">
                    <p class="text-sm text-red-600">
                      {{ errors.email[0] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                flex
                items-center
                justify-end
                px-4
                py-3
                bg-gray-50
                text-right
                sm:px-6
                shadow
                sm:rounded-bl-md sm:rounded-br-md
              "
            >
              <button
                type="submit"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-gray-800
                  border border-transparent
                  rounded-md
                  font-semibold
                  text-xs text-white
                  uppercase
                  tracking-widest
                  hover:bg-gray-700
                  active:bg-gray-900
                  focus:outline-none
                  focus:border-gray-900
                  focus:ring
                  focus:ring-gray-300
                  disabled:opacity-25
                  transition
                "
              >
                {{ __("Save") }}
              </button>
            </div>
          </form>
        </div>
      </loading-card>
    </div>
    <div class="hidden sm:block">
      <div class="py-8"><div class="border-t border-gray-200"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["panel"],
  data() {
    return {
      errors: {
        name: [],
        email: [],
      },
      loading: false,
      title: this.panel.fields[0].title,
      name: this.panel.fields[0].name,
      email: this.panel.fields[0].email,
    };
  },
  computed: {},
  methods: {
    formHasError() {
      return !this.hasCorrentEmailFormat() || !this.email || !this.name;
    },
    hasCorrentEmailFormat() {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email
      );
    },
    hasError: function (name) {
      if (name) {
        return this.errors[name] && this.errors[name].length;
      }

      return (
        this.errors.name &&
        this.errors.name.length &&
        this.errors.email &&
        this.errors.email.length
      );
    },
    onSubmitForm() {
      this.updateProfileInformation();
    },
    resetErrorMessage(key) {
      this.errors[key] = [];
    },
    resetNameErrorMessage() {
      this.resetErrorMessage("name");
    },
    resetEmailErrorMessage() {
      this.resetErrorMessage("email");
    },
    updateProfileInformation() {
      if (!this.name) {
        this.errors.name = [Nova.app.__("Name is required.")];
      }
      if (!this.email) {
        this.errors.email = [Nova.app.__("Email is required.")];
      } else if (!this.hasCorrentEmailFormat()) {
        this.errors.email = [Nova.app.__("Please enter corrent email format.")];
      }

      if (this.formHasError()) {
        return;
      }

      this.loading = true;
      Nova.request()
        .post(`/nova-vendor/nova-profile-resource-tools/information`, {
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          console.log("success");
          console.log(response);
          this.loading = false;
          this.$toasted.success(response.data.message);
        })
        .catch((error) => {
          this.loading = false;

          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
            return;
          }
          this.$toasted.error(
            Nova.app.__(
              "Unknown error occurred while saving. Please refresh the page and try again."
            )
          );
        });
    },
  },
};
</script>
