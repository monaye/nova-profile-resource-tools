Nova.booting((Vue, router, store) => {
  Vue.component('nova-profile-information-tools', require('./components/UpdateProfileInformationForm'));
  Vue.component('nova-password-tools', require('./components/UpdatePasswordForm'));
})
