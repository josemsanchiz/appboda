/**
 * FotosController
 *
 * @description :: Server-side logic for managing fotos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	uploadFile: function (req, res) {
    req.file('fotoboda').upload({
      adapter: require('skipper-s3'),
      key: 'AKIAIMZMFAO55BCBXGLQ',
      secret: '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',
      bucket: 'fotosboda'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      return res.ok({
        files: filesUploaded,
        textParams: req.params.all()
      });
    });
  }
};

