# Google Book Search

## Summary
This application allows users to categorize rewards. User can choose the number of rewards and categories as this application generates rewards and categories based on user's choice

## Installation Guide
* User can clone down the repository to use this application

## Technologies Used
- HTML : Basic skeleton of application basically used to append react components to DOM
- Bootstrap : For application styling

## Application Functioning

https://drive.google.com/file/d/1Zu9yce_8vm5iVAZzlJZI7GD4p6J4p2DQ/view

## Code Snippet

```Javascript
  function generateRewards(rewards) {
        for (var i = 0; i < rewards; i++) {
            var mainDiv = $("<div>");
            mainDiv.addClass("r" + (i + 1));
            mainDiv.append(`<div class="card droptarget" id=r${i + 1}-0 draggable="true" style="width: 5rem; height: 5rem;">
        <span class="close-icon float-right"><i class="fa fa-times text"></i></span>
        <div class="card-body">
            <span class="text"><small>R${i + 1}</small></span>
        </div>
    </div>`);
            $("#rewards").append(mainDiv);
        }
    }
```

> The above functionality describes how rewards are created dynamically based on user's choice


## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)
