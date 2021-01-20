import React from 'react';
import { LayoutContainer, LayoutHeader, Logo } from './posts-layout.styles';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

const PostsLayout = ({children}: LayoutProps) => {
    return (
        <LayoutContainer>
            <LayoutHeader>
            <Logo>
                <Link href="/">
                    <a style={{width:'100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        Logo
                    </a>
                </Link>
            </Logo>
            </LayoutHeader>
                {children}
        </LayoutContainer>
    );
}

export default PostsLayout;
