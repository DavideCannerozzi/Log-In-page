var dialog = document.getElementById('dialog');
var openDialog = document.getElementById('open-dialog');
var openModalDialog = document.getElementById('open-modal-dialog');

function myDialog(){
    openModalDialog.addEventListener('click',function(){
        dialog.showModal();
    });
}
myDialog();

