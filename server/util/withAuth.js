function withAuth(req, res, next){
    if (req.path === '/Login') {
      return next()
    }
    
    if(!req.session.logged_in){
        return res.redirect(`/Login`)
    } else{
      return next()
    }
}

module.exports = withAuth