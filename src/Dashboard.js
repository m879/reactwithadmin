import React ,{Component} from 'react';
import Cards from './Cards';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


export default function Dashboard() {
    const classes = useStyles();  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h3>Blog Page</h3>
            </Paper>
          </Grid>
          <Grid item xs={6}>
                <Cards imgsrc="https://source.unsplash.com/weekly?coding" title='Computer Programming' 
                titledescription="A computer program is a list of instructions that tell a computer what to do. Everything a computer does is done by using a computer program. Programs stored in the memory of a computer."
                 detail="John von Neumann, a mathematician born in Hungary, came up with this idea in the late 1940s. The first digital computer designed with internal programming capacity was the EDVAC (which means Electronic Discrete Variable Automatic Computer), built in 1949."
                />
          </Grid>
          <Grid item xs={6}>
                 <Cards imgsrc="https://source.unsplash.com/weekly?programming" title='Computer Software' 
                 titledescription="Computer software, also called software, is a set of instructions and documentation that tells a computer what to do or how to perform a task. Software includes all different programs on a computer, such as applications and the operating system."
                 detail="The word software was first used in the late 1960s to emphasize on its difference from computer hardware, which can be physically observed by the user. Software is a set of instructions that the computer follows. Before compact discs (CDs) or development of the Internet age, software was used on various computer data storage media tools like paper punch cards, magnetic discs or magnetic tapes."
                 />
          </Grid>
          <Grid item xs={6}>
                 <Cards imgsrc="https://source.unsplash.com/weekly?webdevelopment" title='Web Development' 
                   titledescription="Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network)"
                   detail=" Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications (Web apps), electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development."
                 />
          </Grid>
          <Grid item xs={6}>
                 <Cards imgsrc="https://source.unsplash.com/weekly?datascience" title='Data Science' 
                   titledescription="Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.[1][2] Data science is related to data mining, machine learning and big data."
                   detail="The modern conception of data science as an independent discipline is sometimes attributed to William S. Cleveland.[24] In a 2001 paper, he advocated an expansion of statistics beyond theory into technical areas; because this would significantly change the field, it warranted a new name.[23] Data science became more widely used in the next few years in 2002 the Committee on Data for Science and Technology launched Data Science Journal"
                 />
          </Grid>
          <Grid item xs={6}>
                 <Cards imgsrc="https://source.unsplash.com/weekly?coding" title='Machine Learning' 
                   titledescription="Machine learning (ML) is the study of computer algorithms that improve automatically through experience.[1] It is seen as a subset of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so."
                   detail="The term machine learning was coined in 1959 by Arthur Samuel, an American IBMer and pioneer in the field of computer gaming and artificial intelligence.[8][9] A representative book of the machine learning research during the 1960s was the Nilsson's book on Learning Machines, dealing mostly with machine learning for pattern classification.[10] Interest related to pattern recognition continued into the 1970s, as described by Duda and Hart in 1973"
                 />
          </Grid>
          <Grid item xs={6}>
                 <Cards imgsrc="https://source.unsplash.com/weekly?programming" title='Andriod Development' 
                   titledescription="Android software development is the process by which applications are created for devices running the Android operating system. Google states that[3] .Android apps can be written using Kotlin, Java, and C++ languages using the Android software development kit (SDK), while using other languages is also possible"
                   detail=" All non-JVM languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. "
                 />
          </Grid>
        </Grid>
      </div>
    );
  }

