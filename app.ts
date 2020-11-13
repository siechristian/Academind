let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {
        message: message, errorCode: code
    };

    // while (true) {}
}

// generateError('An error has occured!', 560);

let lorum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis magnam, incidunt laborum dignissimos dolorum culpa aliquam laudantium? Enim sint id iusto non minus voluptates odit eveniet maxime quasi, repellat sunt dignissimos quae ducimus molestias dolorum quas, consectetur tempora, recusandae cum. Saepe, unde commodi fugiat deserunt minus doloremque quis eius placeat quia suscipit excepturi illo esse facere accusantium blanditiis amet porro reprehenderit ut ea! Error voluptatum id doloribus quas provident dignissimos quos voluptatem, soluta vero inventore dolore tempora possimus quia exercitationem asperiores porro deleniti impedit autem reprehenderit ipsam doloremque? Laboriosam culpa cum quasi vel pariatur dolores eveniet ducimus amet, numquam nostrum doloremque quos sapiente laudantium labore ex minima doloribus fugiat inventore ad aspernatur sint? Suscipit iste quasi quidem fuga est accusamus rerum deleniti autem, expedita sit culpa voluptates cumque consectetur unde nostrum commodi molestias soluta dolore voluptas porro error harum similique? At aperiam, exercitationem porro veritatis quaerat inventore id quos eos praesentium fugit odio sapiente repellat quas beatae amet omnis facere quisquam recusandae maxime! Officiis quia veniam repellendus modi fugit et, mollitia, impedit tenetur minima delectus reprehenderit ipsam culpa totam voluptas rem! Laboriosam rem nihil fugit commodi corrupti repellat reiciendis quos sequi voluptatibus, numquam quibusdam, labore sapiente at! Earum a, sed fugiat veniam minus consequatur minima. Expedita temporibus enim vitae autem nam iure accusamus blanditiis consequatur iste nostrum facere sequi labore laboriosam eum, in libero eveniet voluptatem similique ea neque odit magnam assumenda beatae? Facere officia perferendis magni eius a perspiciatis fuga exercitationem natus eveniet, quis repellat voluptas officiis nesciunt corporis consequatur atque inventore nisi ab temporibus cumque quisquam adipisci quas consequuntur quasi? Tempore rerum in maxime vitae dolorum eos doloribus est tempora itaque labore ea molestiae deleniti porro, doloremque aliquam laboriosam fuga consequatur tenetur veritatis mollitia adipisci officiis iste. Illum perspiciatis quidem quo ad, sapiente inventore non molestiae nobis ab voluptates quasi dolores alias laboriosam autem et, tenetur rerum esse minima quod earum. Dolore porro, voluptatem, optio voluptatibus voluptatum voluptates obcaecati hic, perspiciatis vel amet dicta suscipit error ipsam nulla iste? Laudantium animi soluta, deleniti saepe quibusdam minus tempore consequuntur quo delectus a, laboriosam alias porro quaerat fugit? Reiciendis quas alias, sunt officiis quibusdam quaerat cumque voluptates laudantium velit culpa in, laboriosam nostrum? Eligendi, repellendus rem harum animi, sit neque, porro reiciendis voluptatum vitae esse architecto iusto tempore expedita deserunt ea eius nulla facilis dicta nobis sint minus! Sunt alias ducimus earum eos libero! Odio similique sunt sint adipisci, molestiae numquam illo. Voluptates neque voluptatem quidem, corporis dolore distinctio ipsam odio quia exercitationem, aliquam quis debitis. Id, aspernatur minima atque dignissimos vel explicabo quam facilis iste odit, neque sapiente. Facere porro adipisci, modi id error saepe accusamus omnis. Dolore ut officia quo ipsam quas asperiores consectetur provident placeat rem facilis repudiandae voluptatibus illo tempore, ipsa magni veritatis possimus minus optio. Eius tempore pariatur, totam, provident perspiciatis odio modi delectus repellat velit aliquam, praesentium a exercitationem fugit blanditiis quis. Qui corrupti, assumenda aliquid ut rem fugit. Quos cumque harum assumenda labore nulla, reiciendis dolorem libero, tempora deserunt at nihil aspernatur.';
console.log(lorum);