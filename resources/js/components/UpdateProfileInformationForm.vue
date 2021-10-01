<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Update your account's profile information and email address.
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
                    ><span>Name</span></label
                  ><input
                    class="
                      border-gray-300
                      focus:border-indigo-300
                      focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                      rounded-md
                      shadow-sm
                      mt-1
                      block
                      w-full
                    "
                    id="name"
                    type="text"
                    autocomplete="name"
                    v-model="name"
                  />
                  <div class="mt-2" v-bind:class="{ hidden: name }">
                    <p class="text-sm text-red-600">
                      The name field is required.
                    </p>
                  </div>
                </div>
                <!-- Email -->
                <div class="col-span-6 sm:col-span-4">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    for="email"
                    ><span>Email</span></label
                  ><input
                    class="
                      border-gray-300
                      focus:border-indigo-300
                      focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                      rounded-md
                      shadow-sm
                      mt-1
                      block
                      w-full
                    "
                    id="email"
                    type="email"
                    v-model="email"
                  />
                  <div class="mt-2" v-bind:class="{ hidden: hasEmailError }">
                    <p class="text-sm text-red-600">
                      Please enter vaild email address.
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
              <div class="mr-3">
                <div class="text-sm text-gray-600" style="display: none">
                  Saved.
                </div>
              </div>
              <button
                :disabled="shouldDisableSubmit"
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
                  focus:ring focus:ring-gray-300
                  disabled:opacity-25
                  transition
                "
              >
                Save
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
      name: this.panel.fields[0].name,
      email: this.panel.fields[0].email,
    };
  },
  computed: {
    hasEmailError() {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email
      );
    },
    shouldDisableSubmit() {
      return !this.hasEmailError || !this.name;
    },
  },
  mounted() {
    console.log("mounting update profile info", this.panel);
  },

  methods: {
    onSubmitForm() {
      this.updateProfileInformation();
    },
    updateProfileInformation() {
      if (this.shouldDisableSubmit) {
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
          //   this.cardLastFour = response.data.card_last_four;
          //   this.clientSecret = response.data.client_secret;
          this.$toasted.success(response.data.message);
          //   this.initializeStripeCard();
          //   Nova.$emit(
          //     "nova-cashier-subscription-credit-card-changed",
          //     response.data.card_last_four
          //   );
          //   this.cardLastFour =
        })
        .catch((error) => {
          console.log("error on update card", error);
          this.loading = false;
          //   this.initializeStripeCard();
          this.$toasted.error(
            "保存中にエラーが発生いたしました。ページを一度閉じてやり直してください。"
          );
        });
    },

    updatePhotoPreview() {
      //   const photo = this.$refs.photo.files[0];
      //   if (!photo) return;
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.photoPreview = e.target.result;
      //   };
      //   reader.readAsDataURL(photo);
    },

    deletePhoto() {
      //   this.$inertia.delete(route("current-user-photo.destroy"), {
      //     preserveScroll: true,
      //     onSuccess: () => {
      //       this.photoPreview = null;
      //       this.clearPhotoFileInput();
      //     },
      //   });
    },

    clearPhotoFileInput() {
      //   if (this.$refs.photo?.value) {
      //     this.$refs.photo.value = null;
      //   }
    },
  },
};
</script>
