<template>
  <div class="md:grid md:grid-cols-3 md:gap-6 mt-10 sm:mt-0">
    <div class="md:col-span-1 flex justify-between">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium text-gray-900">
          {{ this.title }}
        </h3>
        <p class="mt-1 text-gray-600">
          {{ __("Permanently delete your account.") }}
        </p>
      </div>
      <div class="px-4 sm:px-0"></div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <div class="px-4 py-5 sm:p-6 bg-white shadow rounded-md">
        <div class="max-w-xl text-gray-600">
          {{
            __(
              "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
            )
          }}
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              bg-red-600
              border border-transparent
              rounded-md
              font-semibold
              text-xs text-white
              uppercase
              tracking-widest
              hover:bg-red-500
              focus:outline-none
              focus:border-red-700
              focus:ring
              focus:ring-red-200
              active:bg-red-600
              disabled:opacity-25
              transition
            "
            v-on:click="showConfirmUserDeletion"
          >
            {{ __("Delete Account") }}
          </button>
        </div>
        <!-- Delete Account Confirmation Modal -->
        <!--teleport start-->
        <div
          class="
            flex
            fixed
            right-0
            left-0
            top-4
            z-50
            justify-center
            items-center
            h-modal
            md:h-full md:inset-0
          "
          scroll-region=""
          style=""
          v-show="confirmingUserDeletion"
        >
          <div class="fixed inset-0 transform transition-all" style="">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            class="
              mb-6
              bg-white
              rounded-lg
              overflow-hidden
              shadow-xl
              transform
              transition-all
              max-w-lg
            "
            style=""
          >
            <div class="px-6 py-4">
              <div class="text-lg">{{ __("Delete Account") }}</div>
              <div class="mt-4">
                {{
                  __(
                    "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                  )
                }}
                <div class="mt-4">
                  <input
                    v-model="password"
                    ref="password"
                    class="
                      mt-1
                      border-gray-300
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-300
                      leading-tight
                      focus:outline-none
                    "
                    type="password"
                    placeholder="パスワード"
                    style="
                      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=');
                      background-repeat: no-repeat;
                      background-attachment: scroll;
                      background-size: 16px 18px;
                      background-position: 98% 50%;
                    "
                  />
                  <div class="mt-2" v-show="errors.password">
                    <p class="text-red-600">
                      {{ errors.password[0] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 py-4 bg-gray-100 text-right">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-white
                  border border-gray-300
                  rounded-md
                  font-semibold
                  text-xs text-gray-700
                  uppercase
                  tracking-widest
                  shadow-sm
                  hover:text-gray-500
                  focus:outline-none
                  focus:border-blue-300
                  focus:ring
                  focus:ring-blue-200
                  active:text-gray-800 active:bg-gray-50
                  disabled:opacity-25
                  transition
                "
                v-on:click="closeModal"
              >
                {{ __("Cancel") }}</button
              ><button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  bg-red-600
                  border border-transparent
                  rounded-md
                  font-semibold
                  text-xs text-white
                  uppercase
                  tracking-widest
                  hover:bg-red-500
                  focus:outline-none
                  focus:border-red-700
                  focus:ring
                  focus:ring-red-200
                  active:bg-red-600
                  disabled:opacity-25
                  transition
                  ml-2
                "
                v-on:click="performDeleteAccount"
              >
                {{ __("Delete Account") }}
              </button>
            </div>
          </div>
        </div>
        <!--teleport end-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["resourceName", "resourceId", "panel"],
  data() {
    return {
      confirmingUserDeletion: false,
      password: null,
      errors: {
        password: [],
      },
      title: this.panel.fields[0].title,
    };
  },
  methods: {
    showConfirmUserDeletion() {
      this.confirmingUserDeletion = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },

    closeModal() {
      this.confirmingUserDeletion = false;
    },
    performDeleteAccount() {
      Nova.request()
        .post(`/nova-vendor/nova-profile-resource-tools/delete-account`, {
          password: this.password,
        })
        .then((response) => {
          this.confirmingUserDeletion = false;
          // Simulate an HTTP redirect:
          window.location.replace(this.panel.fields[0].app_url);
        })
        .catch((error) => {
          //   this.confirmingUserDeletion = false;
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
