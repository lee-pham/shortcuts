evaluations = [
    [
      "correct",
      "absent",
      "correct",
      "correct",
      "correct"
    ],
    [
      "correct",
      "correct",
      "correct",
      "correct",
      "correct"
    ],
    null,
    null,
    null,
    null
  ]

evaluations = document.getElementsByTagName("game-app")[0].evaluations
puzzleNumber = document.getElementsByTagName("game-app")[0].dayOffset
out = ""
attempts = 0
evaluations.forEach((row) => {
    if (row == null) {
        return;
    }
    attempts += 1
    row.forEach((element) => {
        if (element == "correct") {
            out += "🟩"
        } else if (element == "absent") {
            out += "⬛"
        } else if (element == "present") {
            out += "🟨"
        }
    })
    out += "\n"
})

console.log(`Wordle #${puzzleNumber} ${attempts}/6\n\n${out}`)
