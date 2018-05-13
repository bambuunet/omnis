<?php
header('Access-Control-Allow-Origin: *');

$mdDirectory = '';

$mdDirectoryUrl1 = preg_replace('/(\.html|\/)[\?\=\w]*$/', '.md', $_SERVER['REQUEST_URI']);
$mdRes1 = file_get_contents(dirname(__FILE__).$mdDirectoryUrl1);

if($mdRes1){
  $res = $mdDirectoryUrl1;
}
else{
  $mdDirectoryUrl2 = preg_replace('/(html|\/)[\?\=\w]*$/', '/index.md', $_SERVER['REQUEST_URI']);
  $mdRes2 = file_get_contents(dirname(__FILE__).$mdDirectoryUrl2);

  if($mdRes2){
    $res = $mdDirectoryUrl2;
  }
  else{
    $res = '/404.md';
  }
}
?>

<?php include(dirname(__FILE__).'/header.php'); ?>
<?php if($res == 'php'): ?>
<?php include(dirname(__FILE__).$res); ?>

<?php else: ?>
  <script>
  olelo();

  function olelo(){
    var a = function(){
      Olelo('<?php echo $res."?t=".time(); ?>', 'article', false);
    }
    var b = function(a){
      escss();
    }
    a();
  }

  function escss(){
    return new Promise(function() {
      var easyCss = new Escss({
        'PREFIX_OF_BREAKPOINT': {
          'sm-': 0,
          'md-': 600,
          'lg-': 960,
          'xl-': 1200
        },
        'COLOR': {
          'red': '#f00'
        }
      });
      easyCss.init();
    });
  }

  </script>
<?php endif ?>
<?php include(dirname(__FILE__).'/footer.php'); ?>
