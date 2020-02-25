const assert = require('assert');
const User = require('../../src/User');

describe('Create new post', () => {
    let user;
    beforeEach('Create user with 1 post', async () => {
        user = new User({
            name: 'Tuan',
            posts: [
                {
                    title: 'javascript is awsome',
                    content: 'Nodejs AnhTuanIT'
                }
            ]
        });
        // console.log(user);
        await user.save();        
    });

    it('Can add new post for user', async () => {
        const user1 = await User.findById(user._id);
        user1.posts.push({
            title: 'AAA',
            content: 'BBB'
        });

        await user1.save();
        const user2 = await User.findOne({});
        assert(user2.posts.length === 2);
        assert(user2.posts[1].title === 'AAA');
    });
});

