<?php
print("<pre>");
// uncomment these two lines to enable warnings/errors to the page
ini_set('display_errors', 1);
error_reporting(E_ALL);


// filename to store counter value.  sys_get_temp_dir() returns a directory with write permissions.
//$COUNTER_FILE = sys_get_temp_dir() . '/' . 'counter.txt';
$COUNTER_FILE = '/data/counter.txt';

// print a message
print("Hello, world $COUNTER_FILE\n");

// get the counter
$counter = file_get_contents($COUNTER_FILE);
if ($counter == false) {
  $counter = 0;
}

// update and persist the counter.
$counter++;
file_put_contents($COUNTER_FILE, $counter);

// print counter value so we can see the value is persisted
print("Counterx: $counter\n");
