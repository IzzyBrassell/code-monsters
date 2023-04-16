function withAuth(req, res, next){
    if (req.path === '/Login') {
      return next()
    }
    
    if(!req.session.logged_in){
        return res.redirect(`/Login`)
    } 
}

module.exports = withAuth