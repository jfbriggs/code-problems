// Given an integer array, sort it in ascending order using quicksort.

/*
LOGIC:

- DIVIDE & CONQUER:

- Select pivot point
- left pointer starts at array start
- right pointer starts at array end
- iterate pointers in, starting with left until a number greater than pivot is found
   - then right, until a value less than or equal to the pivot is found
   - then swap the two
   - then continue

- then repeat process for segment to left of pivot's new location
- and for segment to the right of pivot's new location

*/