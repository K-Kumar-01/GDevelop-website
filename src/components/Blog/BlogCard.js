import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Paragraph from '../../components/Paragraph';

import Author from '../../components/Blog/Author';
import FormatedDate from '../../components/Blog/FormatedDate';
import BlogBigTitle from '../../components/Blog/BlogBigTitle';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class BlogCard extends React.Component {
  render() {
    let card = (
      <div>
        <Container>
          <BlogBigTitle>{this.props.title}</BlogBigTitle>
        </Container>
        <Container>
          <Author author={this.props.author} />
          <FormatedDate date={this.props.date} />
        </Container>
        {this.props.thumbnail && (
          <div className="card-image">
            <figure className="image">
              <img
                style={{
                  objectFit: 'cover',
                  height: '200px',
                  objectPosition: '50% 50%',
                }}
                src={this.props.thumbnail}
              />
            </figure>
          </div>
        )}
        <Paragraph>{this.props.content}</Paragraph>
      </div>
    );

    if (this.props.link) {
      card = <Link to={this.props.link}>{card}</Link>;
    }

    return <div>{card}</div>;
  }
}

export default BlogCard;
