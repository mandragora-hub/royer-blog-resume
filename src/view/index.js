import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './Education.md';
import post2 from './Experience.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'I am Royer Gomez',
  description:
    "My name is Royer Gomez. I am a software developer. I stand out in the area of web programming and mobile applications, embedded. My most notable qualities are responsibility, gravitation, sobriety and love for science and knowledge.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

const posts = [post1, post2];

const sidebar = {
  title: 'More about me',
  description:
    'I am a programmer with a taste for algorithms and agile technologies. Within my experience, I have developed different apps and solutions within my work area. I have a regular command of English. I am a graduate student in software engineering at APEC university.',
  archives: [
    { title: 'Wirt Commerce (Mobile)', url: 'https://wirt.com.do' },
    { title: 'MarketPlace', url: 'https://clone-2fa9c.web.app/' },
    { title: 'ISO815 - Restfull Api(CRUD)', url: 'https://iso-815.herokuapp.com/' },
    { title: 'Repository - CV Resumen', url: 'https://github.com/mandragora-hub/royer-blog-resume' },
  ],
  social: [
    { name: 'GitHub', url:'https://github.com/mandragora-hub/royer-blog-resume', icon: GitHubIcon },
    { name: 'Linkedin',url: 'https://www.linkedin.com/in/royer-gomez-8a21551b7/', icon: TwitterIcon },
    { name: 'Facebook', url: '#', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Royer Gomez" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="Personal information " posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
