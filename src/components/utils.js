export timeDeltaInDay = function( timestamp ){
	const pastTime = new Date( timestamp );
	const now 	   = new Date();

	return Math.floor(( now.getTime() - pastTime.getTime() )/1000/60/60/24)
}