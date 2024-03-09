function checkUserPermissions(section="") {
    // const userHasPermissions = true;
    // return userHasPermissions;
    const menuPerm = {
        Favorites: false,
        About: true,
        Home: true,
        '':false
    }
    console.log('section: ' + section);
    console.log( "menuPerm&Sec: " +menuPerm[section] );
    console.log( "menuPerm&Sec2: " + !!menuPerm[section] );
    return !!menuPerm[section]
}


export default {
    bind: (element, binding) => {
        const {arg, modifer} = binding;
        console.log('arg: '+arg);
        console.log('mod: ' + modifer);
        if (!checkUserPermissions(arg)) element.style.display = 'none';
    }
}