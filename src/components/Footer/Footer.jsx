import "../Styles/footer.css";
import styled from "styled-components";
const Footer = () => {
    return (
        <>
           
<Head>How to download ?</Head>


<Mains>
  <Cards>
  <CardItem>
    <Card>
<CardImage>
<Images src={`https://tweetpik.com/_next/image?url=https%3A%2F%2Fworldwideinterweb.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fhow-to-download-twitter-videos-750x750.jpg&w=1920&q=75`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Copy the URL
</CardTitle>
<CardText>copy the URL of the video</CardText>
</CardContent>
</Card>
  </CardItem>
  <CardItem>
    <Card>
<CardImage>
<Images src={`https://tweetpik.com/_next/image?url=https%3A%2F%2Fworldwideinterweb.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fhow-to-download-twitter-videos-1-564x1000.jpg&w=1920&q=75`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Paste the link
</CardTitle>
<CardText>Paste link into the Instait field and click the Download button</CardText>
</CardContent>
</Card>
  </CardItem>
  <CardItem>
    <Card>
<CardImage>
<Images src={`https://igram.io/static/img/results.jpg`}></Images>
</CardImage>
<CardContent>
<CardTitle>
Download Successful
</CardTitle>
<CardText>Instait will sync your URL and creates a downloadable link</CardText>
</CardContent>
</Card>
  </CardItem>
  </Cards>
</Mains>
 
 <Footers>
   <Wrapper>
   <Small>&copy;2021 <strong>Twvio By Yasin</strong>, Made with ❤️</Small>
   <FooterNav>
  <FooterLink href="https://github.com/awesome-yasin">Github Link</FooterLink>
  <FooterLink href="https://www.instagram.com/yasinn.0x/">Instagram Link</FooterLink>
  <FooterLink href="https://github.com/awesome-yasin">Other Awesome Projects</FooterLink>
   </FooterNav>
   </Wrapper>
 </Footers>
        </>
    );
};

const Head = styled.div`
font-size: 50px;
text-align: center;
font-weight: bold;
background: linear-gradient(90deg, hsla(191, 75%, 60%, 1) 0%, hsla(248, 87%, 36%, 1) 62%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`


const Mains = styled.div `
max-width: 1600px;
margin: 0 auto;

`

const Cards = styled.ul `
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 0;
padding: 0;
`

const CardItem = styled.li `
display: flex;

  padding: 0.7rem;
  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }
  
  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }
`
const CardImage = styled.div `
object-fit: cover;
`
const Images = styled.img `
width: 370px;
 height: 300px;
  
`
const Card = styled.div `
background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column !important;
  overflow: hidden;`

  const CardContent = styled.div `
  padding: 0.5rem;
  background: linear-gradient(90deg, hsla(191, 75%, 60%, 1) 0%, hsla(248, 87%, 36%, 1) 62%);`
 
  const CardTitle = styled.h2 `
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;`

  const CardText = styled.p `
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;`

const Footers = styled.div `
background: linear-gradient(90deg, hsla(191, 75%, 60%, 1) 0%, hsla(248, 87%, 36%, 1) 62%);
  display: table;
  width: 100vw;
  height: 8rem;
  text-align: center;
  padding: 1rem;
  font-family: 'Arial', sans-serif;
  font-size: .875rem;
`

const Wrapper = styled.div `
display: table-cell;
  vertical-align: middle;`

  const Small =  styled.div `
  color: #ccc;
  letter-spacing: .025rem;
  margin-bottom: 1.5rem;
  display: block;`

  const FooterNav = styled.div ``

  const FooterLink = styled.a `
  color: #fff;
  text-decoration: none;
  margin: 0 .5rem;
  display: inline-block;
  &:hover{
    color: #f26896;
  transition: color .15s ease-in-out;
  }
`
export default Footer;
