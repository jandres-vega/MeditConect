export const resolveRoutes = (route:string) => {
    switch (route){
        case '/':
            return '/'
        case 'formdoctor':
            return `/${route}`
        case 'formpatient':
            return `/${route}`
        case 'formappointment':
            return `/${route}`
    }
}