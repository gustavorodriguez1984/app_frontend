import { Button, Card, Container, Grid, MenuItem,Table, Paper,TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Dialog,DialogTitle,DialogContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../theme/useStyles';
import { agregarLibro, editarLibro, listarLibros, obtenerLibroKey } from '../Data/libros';

const Libro = () => {

    const clearLibro={
        categoria:'',
        titulo:'',
        autor:''
    }

    const [libro,setLibro]=useState({
        categoria:'',
        titulo:'',
        autor:''
    })
    const [libroEdita,setLibroEdita]=useState({
        key:0,
       categoriaE:'',
       tituloE:'',
       autorE:''
   })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLibro(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const guardarData=()=>{
       agregarLibro(libro);
       setLibro(clearLibro);
    }

    const [librosArray,setLibrosArray]= useState([])

    const listarDataLibros=()=>{
        const data = listarLibros();
        setLibrosArray(data);
     }

     useEffect(()=>{
            listarDataLibros();
     },[librosArray.length])
    
     const abrirDialog=(key)=>{
         setOpen(true);
         const dataLibro = obtenerLibroKey(key);
         setLibroEdita({
             key:key,
            categoriaE:dataLibro.categoria,
        tituloE:dataLibro.titulo,
        autorE:dataLibro.autor

         })
        console.log("Mi boton editar");
        
     }

     const eliminarData=()=>{
        console.log("boton eliminar");
       
     }
     const editarData=()=>{
         const nuevaData = editarLibro(libroEdita)
        console.log("este es mi boton editar",nuevaData);
        cerrarDialog();
       
     }
     
    const [open,setOpen]=useState(false)

    const cerrarDialog=()=>{
        setOpen(false);
        
     }

    const handleChangeEdita=(e)=>{
        const {name,value}=e.target;
        setLibroEdita(prev=>({
            ...prev,
            [name]:value
        }))
    }


    const classes = useStyles();
    return (
       <Container className ={classes.containermt}>
           <Grid container justify="center">
               <Grid item lg={7} md={8}>
                   <Card className={classes.card} align ="center">
                    <Typography variant="h4">Libros</Typography>
                    <form className={classes.form} onSubmit={(e)=>e.preventDefault()}>
                        <Grid container spacing ={2}>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                               <TextField
                               select
                               label="Categoria"
                               variant="outlined"
                               fullWidth
                               align ="left"
                               name="categoria"
                               value={libro.categoria}
                               onChange={handleChange}
                               >
                                  <MenuItem value ="Programacion">Programacion</MenuItem>  
                                  <MenuItem value ="Historia">Historia</MenuItem>  
                                  <MenuItem value ="Matematicas">Matematicas</MenuItem>      
                               </TextField>                     
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                            <TextField
                            label="Titulo"
                            variant ="outlined"
                            fullWidth
                            name="titulo"
                               value={libro.titulo}
                               onChange={handleChange}
                            />
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                            <TextField
                            label="Autor"
                            variant ="outlined"
                            fullWidth
                            name="autor"
                               value={libro.autor}
                               onChange={handleChange}
                            />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                            <Button
                            variant ="contained"
                            fullWidth
                            color="primary"
                            type ="submit"
                            onClick={guardarData}
                            >
                                Guardar
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                   </Card>
               </Grid>
           </Grid>
           <TableContainer component={Paper} className={classes.containermt}>
               <Table>
                   <TableHead>
                       <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell align ="center" colSpan={2}>Acciones</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {librosArray.map((libroObj)=>(
                         <TableRow key={libroObj.key}>
                         <TableCell>{libroObj.categoria}</TableCell>
                         <TableCell>{libroObj.titulo}</TableCell>
                         <TableCell>{libroObj.autor}</TableCell>
                         <TableCell>
                             <Button 
                             variant ="contained" 
                             color="primary" 
                             onClick={()=>abrirDialog(libroObj.Key)}>
                                 Editar
                             </Button>
                         </TableCell>
                         <TableCell>
                         <Button variant ="contained" color="secondary"  onClick={eliminarData}>
                                 Eliminar
                             </Button>
                         </TableCell>
                         
                    </TableRow>
                       ))}
                  
                   </TableBody>
               </Table>
            </TableContainer>
            <Dialog open={open} onClose={cerrarDialog} maxWidth="xs" fullWidth align="center">
            <DialogTitle>Editar Libro </DialogTitle>
                <DialogContent>
                    <form onSubmit={(e)=> e.preventDefault()}>

                    <TextField
                               select
                               label="Categoria"
                               variant="outlined"
                               fullWidth
                               className={classes.gridmb}
                               align ="left"
                               name="categoriaE"
                               value={libroEdita.categoriaE}
                               onChange={handleChangeEdita}
                               >
                                  <MenuItem value ="Programacion">Programacion</MenuItem>  
                                  <MenuItem value ="Historia">Historia</MenuItem>  
                                  <MenuItem value ="Matematicas">Matematicas</MenuItem>      
                               </TextField>  

                               <TextField
                            label="Titulo"
                            variant ="outlined"
                            fullWidth
                            className={classes.gridmb}
                            name="tituloE"
                               value={libroEdita.tituloE}
                               onChange={handleChangeEdita}
                            />

                            <TextField
                            label="Autor"
                            variant ="outlined"
                            fullWidth
                            className={classes.gridmb}
                            name="autorE"
                               value={libroEdita.autorE}
                               onChange={handleChangeEdita}
                            />

                            <Button
                            variant ="contained"
                            fullWidth
                            color="primary"
                            className={classes.gridmb}
                            type ="submit"
                            onClick={editarData}
                            >
                                Guardar
                            </Button>
                    </form>
                </DialogContent>
           
            </Dialog>
       </Container>
    );
};

export default Libro;
