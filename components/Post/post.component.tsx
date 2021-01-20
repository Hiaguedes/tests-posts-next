import { PostContainer, Title, TitleContainer, BodyTextStyle, BodyContainer, AuthorBottom } from './post.styles';
interface PostProps {
    title: string;
    body: string;
    author: string
}
const Post = ({title, body, author}: PostProps) => {
    return (
        <>
        <PostContainer>
        <TitleContainer>
            <Title>{title}</Title>
        </TitleContainer>

            <BodyContainer>
            <BodyTextStyle>{body}</BodyTextStyle>
            </BodyContainer>
        </PostContainer>
        <AuthorBottom>
         {author}
         </AuthorBottom>
        </>
    );
}

export default Post;
