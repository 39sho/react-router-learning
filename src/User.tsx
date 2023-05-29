import { useParams } from 'react-router-dom';

const users = ['39sho'];

export default () => {
    const { userId } = useParams();
    
    if (!users.includes(userId as string)) {
        throw new Error(`${userId} is not exist`);
    }
    return (<span>Here is { userId }</span>);
};