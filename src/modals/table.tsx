import Swal from "sweetalert2";

export const modalDelete = Swal.mixin({
    title: "Tem certeza que deseja deletar?",
    showDenyButton: true,
    confirmButtonText: "Sim",
    denyButtonText: "Não",
});

export const modalAdd = Swal.mixin({
    input: "number",
    text: "Insira a quantidade em metros:",
    showDenyButton: true,
    confirmButtonText: "Adicionar ao carrinho",
    denyButtonText: "Cancelar",
});
