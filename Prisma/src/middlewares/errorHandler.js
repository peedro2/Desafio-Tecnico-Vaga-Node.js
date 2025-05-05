
const errorHandler = (erro, req, res, next) => {
    console.error("ERRO NÃO TRATADO:", erro.stack || erro); 
    
    const statusCode = erro.statusCode || 500;
   
    const mensagem = erro.message || "Ocorreu um erro interno no servidor.";
  
     res.status(statusCode).json({
      status: "erro",
      mensagem: mensagem,
      
    });
  };
  
  export default errorHandler;
  