import Swal from "sweetalert2";

export const alertMessage = async (message:string, icon):Promise<void> => {
    await Swal.fire({
        position: 'center',
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 2500
    })
}