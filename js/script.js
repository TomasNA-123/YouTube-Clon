function toggle_sidebar(){
    if(window.innerWidth < 1300){
    document.getElementById('sidebar-exit-background').classList.toggle('d-none');
    document.getElementById('main--main-sidebar__dinamic').classList.toggle('active');
    }
    else{
        document.getElementById('main').classList.toggle('sidebar-lg');
    }
}