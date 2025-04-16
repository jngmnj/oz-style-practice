import { styled } from 'styled-components';
import { flexMixin, fontMixin } from "../style/styled";

export default function Content({ content }) {
  const ContentContainer = styled.div`
    ${flexMixin({ direction: "column", align: "flex-start", gap: "5px" })};
    img {
      width: 300px;
      border-radius: 10px;
      margin-bottom: 3px;
      min-height: 225px;
    }
    span {
      ${fontMixin({ size: "12px" })};
      color: $tag-color;
      border: 1px solid $tag-color;
      padding: 4px 5px;
      border-radius: 3px;
    }
    div {
      ${fontMixin({ size: "18px", weight: 600 })};
    }
    p {
      ${fontMixin({ size: "12px" })};
      color: $gray;
    }
  `;
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
