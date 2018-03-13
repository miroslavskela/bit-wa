import * as data from './data.js'
import * as ui from './ui.js'



    const init = () => {
        const { baseUrl } = data.constants
        fetchUsers(baseUrl)
    }

    const fetchUsers = (url) => {
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }

    // Our handlers for shows
    const onSuccessHandler = (response) => {
        console.log("DONE", response)

        const adaptedUsers = data.adaptData(response.items)
        console.log(adaptedUsers)

        ui.displayUsers(adaptedUsers)
    }

    const onErrorHandler = (error) => {
        console.log(error)
        ui.displayError(error)
    }

    export {
        init
    }