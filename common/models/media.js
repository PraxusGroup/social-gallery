module.exports = function(Media) {

  Media.beforeRemote('upload', function(ctx, media, next) {

    next();

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
