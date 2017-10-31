program SearchRndElementInRndArray;
uses crt;
const SIZE_ARRAY = 10;
const RANDOM_MAX_BORDER = 15;
var
  randomArray : array [1..SIZE_ARRAY + 1] of integer;
  randomElement : integer;
  i : integer;
begin
  clrscr;
  randomize;

  for i := 1 to SIZE_ARRAY do
  begin
    randomArray[i] := random(RANDOM_MAX_BORDER);
  end;

  writeln('Filled random array: ');
  for i := 1 to SIZE_ARRAY do
  begin
    write(randomArray[i], ' ');
  end;
  writeln;

  randomElement := random(RANDOM_MAX_BORDER);
  randomArray[SIZE_ARRAY + 1] := randomElement;

  i := 1;
  while (randomArray[i] <> randomElement) do
  begin
    i := i + 1;
  end;
  
  if (i <> SIZE_ARRAY + 1) then
    writeln('Element ', randomElement, ' is found!') 
  else
    writeln('Element ', randomElement, ' not found');
  readln;
end.