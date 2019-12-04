<?php

print("Hello, world\n");
$counter = file_get_contents("counter.txt");
if ($counter == false) {
  $counter = 0;
}

$counter++;
file_put_contents("counter.txt", $counter);

print("Counter: $counter\n");
