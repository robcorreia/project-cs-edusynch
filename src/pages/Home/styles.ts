import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding-top: 100px;
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXXL}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    line-height: 56px;
    margin-bottom: 24px;
  }

  p {
    line-height: 32px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin-bottom: 32px;
  }
`;

export const AboutUs = styled.section`
  margin-top: 120px;
  background: rgb(247, 247, 247);
  background: linear-gradient(
    0deg,
    rgba(247, 247, 247, 1) 35%,
    rgba(255, 255, 255, 1) 100%
  );

  .about-us-content {
    display: flex;
  }

  .card-container {
    max-width: 696px;
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
  }

  .top-content {
    display: flex;
    gap: 32px;
    align-self: flex-start;
  }

  .bottom-content {
    display: flex;
    gap: 32px;
    margin-left: 110px;
  }

  .side-content {
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    margin-top: 140px;

    h5 {
      color: ${({ theme }) => theme.COLORS.PRIMARY_500};
      line-height: 32px;
      font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
      margin-bottom: 4px;
    }

    h2 {
      line-height: 48px;
      font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 40px;
      max-width: 406px;
      line-height: 24px;
    }
  }
`;

export const BackgroundSeparator = styled.section`
  width: 100%;
  min-height: 247px;
  background: url("images/separator-background.svg") center no-repeat;
  background-size: cover;
  margin-top: 30px;
`;

export const TopCryptos = styled.section`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 120px 0;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    line-height: 40px;
    margin-bottom: 48px;
  }

  .view-more {
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    border: none;
    background: transparent;
    cursor: pointer;
    margin-top: 32px;
    text-align: center;
  }
`;

export const Contact = styled.section`
  background: linear-gradient(
    90deg,
    rgba(251, 171, 52, 1) 38%,
    rgba(173, 114, 26, 1) 100%
  );

  .background {
    min-height: 412px;
    background: url("images/contact-background.svg") center no-repeat;
    background-size: cover;
  }

  .content {
    display: grid;
    padding: 120px 0;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    justify-content: center;
  }

  .content-left {
    h4 {
      line-height: 32px;
      color: ${({ theme }) => theme.COLORS.PRIMARY_200};
      font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
      line-height: 48px;
      margin-top: 4px;
      margin-bottom: 16px;
    }

    p {
      max-width: 385px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      line-height: 24px;
    }
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 384px;

  button {
    margin-top: 21px;
    box-shadow: 0px 13px 23px 0px rgba(0, 0, 0, 0.04);
    -webkit-box-shadow: 0px 13px 23px 0px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 0px 13px 23px 0px rgba(0, 0, 0, 0.04);
  }
`;

export const TagBox = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 80px;
`;
