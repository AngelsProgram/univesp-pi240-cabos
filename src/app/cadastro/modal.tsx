import Swal from "sweetalert2";

export const ModalError = Swal.mixin({
    title: "Error!",
    text: "Ops... Aconteceu algum erro.",
    icon: "error",
    confirmButtonText: "Ok",
    footer: "<a href=''>Entre em contato com um administrador</a>",
});


export const ModalSuccess = Swal.mixin({
    title: "Sucesso!",
    text: "Produto cadastrado com sucesso.",
    icon: "success",
    confirmButtonText: "Ok",
});
