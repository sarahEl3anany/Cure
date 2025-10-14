import CountryList from 'country-list-with-dial-code-and-flag'
const { $apiFetch } = useNuxtApp()

export const CountryService = {
  getData() {
    const resp = CountryList.getAll() 
    return resp
  },
  getCountries() {
    const rest = Promise.resolve(this.getData())
    return rest
  }
};