let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'Hi, how are you?', likesCount: 10},
            {id: 3, message: 'It\'s my first post', likesCount: 20},
            {id: 4, message: 'It\'s my first post', likesCount: 20},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Hi'},
            {id: 5, message: 'How are you?'},
            {id: 6, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    },

};

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
}

export default state;