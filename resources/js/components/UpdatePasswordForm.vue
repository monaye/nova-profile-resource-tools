<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">
            {{ this.title }}
          </h3>
          <p class="mt-1 text-gray-600">
            {{
              __(
                "Ensure your account is using a long, random password to stay secure."
              )
            }}
          </p>
        </div>
        <div class="px-4 sm:px-0"></div>
      </div>
      <loading-card :loading="loading" class="md:col-span-2">
        <div class="md:mt-0 md:col-span-2">
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
                <!-- currentPassword -->
                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block font-medium text-gray-700"
                    for="current_password"
                    ><span>{{ __("Current Password") }}</span></label
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
                    id="current_password"
                    type="password"
                    v-model="currentPassword"
                    v-on:keyup="resetCurrentPasswordErrorMessage"
                  />
                  <div class="mt-2" v-if="hasError('current_password')">
                    <p class="text-red-600">
                      {{ errors.current_password[0] }}
                    </p>
                  </div>
                </div>
                <!-- new password -->
                <div class="col-span-6 sm:col-span-4">
                  <label class="block font-medium text-gray-700" for="password"
                    ><span>{{ __("New Password") }}</span></label
                  >
                  <input
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
                    id="password"
                    type="password"
                    v-model="newPassword"
                    v-on:keyup="resetNewPasswordErrorMessage"
                  />
                  <div class="mt-2" v-if="hasError('password')">
                    <p class="text-red-600">
                      {{ errors.password[0] }}
                    </p>
                  </div>
                </div>
                <!-- confirmPassword -->
                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block font-medium text-gray-700"
                    for="confirm_password"
                    ><span>{{ __("Confirm Password") }}</span></label
                  >
                  <input
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
                    id="confirm_password"
                    type="password"
                    v-model="confirmPassword"
                    v-on:keyup="resetConfirmPasswordErrorMessage"
                  />
                  <div class="mt-2" v-if="hasError('password_confirmation')">
                    <p class="text-red-600">
                      {{ errors.password_confirmation[0] }}
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
      loading: false,
      errors: {
        password: [],
        current_password: [],
        password_confirmation: [],
      },
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      title: this.panel.fields[0].title,
    };
  },
  computed: {},

  methods: {
    resetInputs: function () {
      this.currentPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    hasError: function (name) {
      if (name) {
        return this.errors[name] && this.errors[name].length;
      }

      return (
        this.errors.password &&
        this.errors.password.length &&
        this.errors.current_password &&
        this.errors.current_password.length &&
        this.errors.password_confirmation &&
        this.errors.password_confirmation.length
      );
    },

    onSubmitForm() {
      this.updatePassword();
    },

    resetNewPasswordErrorMessage() {
      this.resetErrorMessage("password");
    },
    resetCurrentPasswordErrorMessage() {
      this.resetErrorMessage("current_password");
    },
    resetConfirmPasswordErrorMessage() {
      this.resetErrorMessage("password_confirmation");
    },
    resetErrorMessage(key) {
      this.errors[key] = [];
    },
    updatePassword() {
      this.loading = true;

      Nova.request()
        .post(`/nova-vendor/nova-profile-resource-tools/password`, {
          current_password: this.currentPassword,
          password: this.newPassword,
          password_confirmation: this.confirmPassword,
        })
        .then((response) => {
          this.loading = false;
          this.resetInputs();
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
