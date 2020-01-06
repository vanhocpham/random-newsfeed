const cluster = require( "cluster" );

if ( cluster.isMaster ) {
  console.log( "Server running... Cluster System starting...!" );

  // Count the machine's CPUs
  // eslint-disable-next-line global-require
  const cpuCount = require( "os" ).cpus().length;

  console.log( `Forking ${cpuCount} CPUS` );

  // Create a worker for each CPU
  for ( let i = 0; i < cpuCount; i++ ) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on( "exit", function () {
    cluster.fork();
  } );
} else {
  // eslint-disable-next-line global-require
  require( "./index" );
}
