const classA = [
    {
        name: 'Helena',
        grade: 0
    },
    {
        name: 'Romulo',
        grade: 6
    },
    {
        name: 'Pedro',
        grade: 8
    },
    {
        name: 'Luiza',
        grade: 9.3
    }
]

const classB = [
    {
        name: 'Gabriela',
        grade: 6.4
    },
    {
        name: 'Jessica',
        grade: 0
    },
    {
        name: 'Paula',
        grade: 6.3
    },
    {
        name: 'Maria',
        grade: 8.6
    },
    {
        name: 'Paulo',
        grade: 10.0
    }
]


function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {

    if (average > 5) {
        console.log(`${turma} avarage:  ${average} ! Congratulations !!`)
    } else {
        console.log(`${turma} avarege ${average} ... is not good.. you need study more!`)
    }

}

function markAsFlunked(student) {
    
    student.flunked = false;
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsReprovados(students) { // essa função vai verificar student por student
    
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student)
    }
}


sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsReprovados(classA)
studentsReprovados(classB)