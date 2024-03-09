
const roles = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const actions = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
function getStory(role,place,action,temperature='94 fahrenheit',client='Bob',weight='300 pounds'){
    return `It was ${temperature} outside, so ${role} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${action}. ${client} saw the whole thing, but was not surprised — ${role} weighs ${weight}, and it was a hot day.`
}