var fs = require('fs');
var fileType = require('file-type');
var lwip = require('lwip');

module.exports = function(Media) {

  Media.beforeRemote('upload', function(ctx, media, next) {

    if(!ctx.req._readableState.buffer)
      return next();
    if(!ctx.req._readableState.buffer[0])
      return next();

    var buffer = removeAddedMeta(ctx.req._readableState.buffer[0]);

    if(!buffer)
      return next();

    var fileInfo = fileType(buffer);

    if(!fileInfo)
      return next();

    // obtain an image object:
    lwip.open(buffer, fileInfo.ext, function(err, image){
      if(err) return next();

      image.scale(0.2, function(err, image){
        if(err) return next();

        image.toBuffer(fileInfo.ext, function(err, buffer){
          if(err) return next();

          ctx.req._readableState.buffer[0] = buffer;

          next();
        });
      });
    });

  });

};

function removeAddedMeta(buffer){
  if(!buffer)
    return false;

  buffer = buffer.toString('binary').split('\r\n');

  buffer.splice(0, 4);

  buffer.pop();
  buffer.pop();

  return new Buffer(buffer.join('\r\n'), 'binary');

}
