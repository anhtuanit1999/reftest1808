const assert = require('assert');
const User = require('../../src/User');

describe('Create new post', () => {
    let userId;//eslint-disable-line
    let postId;
    beforeEach('Create user with post', async () => {
        const user = new User({
            name: 'Tuan',
            posts: [
                {
                    title: 'javascript is awsome',
                    content: 'Nodejs AnhTuanIT'
                },
                {
                    title: 'AAA',
                    content: 'BBB'
                }
            ]
        });
        userId = user._id;
        postId = user.posts[1]._id;
        await user.save();
    });

    it('Before run correctly', async () => {
        const user = await User.findOne({});
        assert(user.name === 'Tuan');
        assert(user.posts.length === 2);
    });

    it('Can remove post', async () => {
        const user = await User.findOne({});
        const postToRemove = user.posts.find(post => post._id.toString() === postId.toString());
        postToRemove.remove();
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.posts.length === 1);
        assert(user2.posts[0].title === 'javascript is awsome');
    });
});
